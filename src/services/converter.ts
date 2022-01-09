import api from './api';

type Props = {
    fromCountry: String,
    toCountry: String,
    amount: Number
};

type responseProps = {
	result: String,
	documentation: String,
	terms_of_use: String,
	time_last_update_unix: Number,
	time_last_update_utc: String,
	time_next_update_unix: Number,
	time_next_update_utc: String,
	base_code: String,
	target_code: String,
	conversion_rate: Number,
	conversion_result: Number
}

export async function converterPair (props: Props): Promise<responseProps> {
    const { fromCountry, toCountry, amount } = props;
    const { data } = await api.get(`/pair/${fromCountry}/${toCountry}/${amount}`);
    return data;
};