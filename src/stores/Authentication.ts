import { defineStore } from 'pinia';

import { useOAuth2Api } from '/@/apis';

export const useAuthenticationStore = defineStore('Authentication', {
	state: () => ({
		access_token: '',
		expires_in: 0,
		refresh_token: '',
		license: '',
		openid: '',
		scope: '',
		token_type: '',
	}),

	actions: {
		signIn(username: string, password: string) {
			const oauth2Api = useOAuth2Api();
			return new Promise<string>((resolve, reject) => {
				oauth2Api
					.passwordFlow(username, password)
					.then((response) => {
						console.log(response);

						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
			// const token: OAuth2Token = {
			// 	access_token: 'ddd',
			// 	expires_in: 1024,
			// 	refresh_token: 'eee',
			// 	license: 'Herodotus',
			// 	openid: '1',
			// 	scope: 'openId',
			// 	token_type: 'bearer',
			// };

			// if (token) {
			// 	this.access_token = token.access_token;
			// 	this.expires_in = token.expires_in;
			// 	this.refresh_token = token.refresh_token;
			// 	this.license = token.license;
			// 	this.openid = token.openid;
			// 	this.scope = token.scope;
			// 	this.token_type = token.token_type;
			// }
		},
		signOut() {},
	},
	persist: true,
});
