const DISABLED = [0]

export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': DISABLED,
		'header-case': DISABLED,
		'header-max-length': DISABLED,
		'body-max-line-length': DISABLED,
		'footer-max-line-length': DISABLED
	}
}
