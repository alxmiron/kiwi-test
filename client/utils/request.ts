export const request = <T>(src: string): Promise<T> => {
	return fetch(src).then((res) => res.json());
};
