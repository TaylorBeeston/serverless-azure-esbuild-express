import { build } from 'esbuild';

const startTime = Date.now();

console.log('🎁 Building main bundle...');

const finalBuildObj = {
    entryPoints: ['src/index.ts'],
    platform: 'node',
    bundle: true,
    format: 'cjs',
    outfile: 'dist/index.js',
    target: 'node12',
    plugins: [],
    external: [],
    minify: true,
};

if (process.env.NODE_ENV !== 'production') {
    finalBuildObj.sourcemap = 'inline';
    finalBuildObj.minify = false;
}

build(finalBuildObj).then(() => {
    console.log(`🎁 Done building main bundle! (${Date.now() - startTime}ms)`);
});

