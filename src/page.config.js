module.exports = {
	env: "prod",
	server: {
		local: {
			page_url: 'http://localhost:8080/',
			api: 'https://test.hispanocash.com',
			headers: {
				'content-type': 'application/json',
				'reference': 'hispano'
			},
			validate_reference: {
				token_api: 'vw1Uvg3guzdgY7MpNzOMjl072UKSheYTJwuxfWRwTZ6rWLQqkFPbAQrwX2EB'
			}
		},
		dev: {
			page_url: 'https://hispano.blueberry.team/',
			api: 'https://test.hispanocash.com',
			headers: {
				'content-type': 'application/json',
				'reference': 'hispano'
			},
			validate_reference: {
				token_api: 'vw1Uvg3guzdgY7MpNzOMjl072UKSheYTJwuxfWRwTZ6rWLQqkFPbAQrwX2EB'
			}
		},
		prod: {
			page_url: 'https://hispanocash.com',
			api: 'https://api.hispanocash.com',
			headers: {
				'content-type': 'application/json',
				'reference': 'hispano'
			},
			validate_reference: {
				token_api: 'vw1Uvg3guzdgY7MpNzOMjl072UKSheYTJwuxfWRwTZ6rWLQqkFPbAQrwX2EB'
			},
			get_services: {
				url_taecel: 'https://taecel.com/app/api/RequestTXN',
				url_taecel_status:'https://taecel.com/app/api/StatusTXN',
				api_key: '1d486b202ebe938e2b46c2ac7e340545',
				api_nip: '3b1f8e50d7d5c7e2d8961689ade53710'
			}
		}
	},
}