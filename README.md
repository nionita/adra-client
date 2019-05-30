# ADRA Browser App

This is a demo client app for the ADRA server.

A browser client app is easier to use. But most important, it demonstrates that
the ADRA server handles correctly the Cross Origin Ressource Sharing (CORS) problem,
which involves answering with some more headers (Access-Controll-Allow-*) and
accepting the OPTIONS method for
[complex requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Examples_of_access_control_scenarios).

# App is written in svelte

Because it would be boring to use the same WEB framework all the time, I wrote this app in [svelte](https://svelte.dev).
The styling, and maybe even the UI, could be definitively better, but this is not the main intention here.