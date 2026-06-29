# Glideflow new-api branding checklist

Key assumption: only the configurable new-api surfaces are branded here. The login form and authenticated console remain the upstream new-api React UI.

## General

- System name: `Glideflow`
- Server address: `https://app.glideflowai.com`
- Default language: `English`
- Theme color: `#6ee7b7`
- API base URL shown in copy: `https://api.glideflowai.com/v1`
- Support email: `support@glideflowai.com`

## Logo URLs

- Dark wordmark: `https://glideflowai.com/brand/logo-dark.svg`
- Light wordmark: `https://glideflowai.com/brand/logo-light.svg`
- Square avatar/logo: `https://glideflowai.com/brand/avatar.svg`
- Favicon: `https://glideflowai.com/brand/favicon.svg`

Use the square avatar/logo for compact logo fields. Use the dark wordmark when the setting renders on a dark background, and the light wordmark when the setting renders on a white or light background.

## Homepage content

Paste the full contents of `newapi/homepage.html` into the new-api admin setting for homepage content.

Expected links in that HTML:

- Create account: `/register`
- Sign in: `/login`
- Docs: `https://glideflowai.com/docs`

## Login and registration

- Allow new user registration: `On`
- Email verification: `Off` until SMTP is configured
- Unconfigured third-party login methods: `Off`

## Footer or about HTML

Optional footer HTML:

```html
<span>Glideflow provides OpenAI-compatible access to practical models for independent developers.</span>
<a href="https://glideflowai.com/docs">Docs</a>
<a href="mailto:support@glideflowai.com">support@glideflowai.com</a>
```

## Notes

- Keep the dashboard honest about data flow: requests pass through the Glideflow gateway and are forwarded to selected upstream model providers.
- Do not add analytics or tracking scripts to the injected homepage.
