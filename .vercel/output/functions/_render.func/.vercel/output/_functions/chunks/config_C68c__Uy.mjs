const astroConfig = {"base":"/","root":"file:///Users/hariomharsh/Developer/Loader%20Docs/","srcDir":"file:///Users/hariomharsh/Developer/Loader%20Docs/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {"styleOverrides":{"borderRadius":"0.5rem","borderWidth":"0px"},"themes":["poimandres","light-plus"]};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///Users/hariomharsh/Developer/Loader%20Docs/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
