const {
    spawn
} = require('child_process');

if (process.env.NODE_ENV === 'production') {
    return spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'build'], {
        stdio: 'inherit'
    });
} else {
    console.log('Environment is not production.');
    console.log('Do not execute npm run build.')
}