-- This is a deployment file used to publish documentation pages.
-- See https://github.com/libkafe/kafe for documentation.

local k = require('kafe')
k.require_api(1)

-- local username = os.getenv('USER');
local username = 'fernando';

k.add_inventory(username, 'w03.ovh.0x3e.net', 22, 'production', 'docs')

k.task('deploy', function()
    local version = os.time(os.date('!*t'))

    k.define('deploy_to', '/var/www/docs.fluidplayer.com')
    k.define('version', version)

    k.local_within('./website/')

    if not k.local_shell('[ ! -d ./build/ ] || rm -r ./build/')
        then error('Failed to remove dist folder') end

    if not k.local_shell('yarn build')
        then error('Failed to build dist') end

    local archive = k.archive_dir_tmp('build/fluid-player/')

    local deploy = function()
        k.shell('mkdir -p {{deploy_to}}')

        k.within('{{deploy_to}}')

        k.shell('mkdir -p releases/{{version}}/')

        k.upload_file(archive, 'releases/{{version}}/upload.tar.gz')

        if not k.shell('tar -xf releases/{{version}}/upload.tar.gz -C releases/{{version}}')
            then error('Could not unpack uploaded archive') end

        if not k.shell('rm releases/{{version}}/upload.tar.gz')
            then error('Failed to remove uploaded archive') end

        k.shell('chmod g+rw releases && chmod g+rw -Rf releases/')
    end

    local symlink = function()
        k.within('{{deploy_to}}')

        if not k.shell('ln -nsfv releases/{{version}}/ web')
            then error('Failed to update the symlink to the new version') end
    end

    local remove_old_releases = function()
        k.within('{{deploy_to}}/releases/')

        if not k.shell('ls -1tr | head -n -3 | xargs -d \'\\n\' rm -rf --') then
            error('Failed to remove old releases') end
    end

    if k.on('docs', deploy) then
        k.on('docs', symlink)
        k.on('docs', remove_old_releases)
    end
end)
