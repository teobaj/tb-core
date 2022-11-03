let url$ = ''

export const updateUrl = (value: string) => {
    url$ = value;
}

export const getUrl = () => {
    return url$
}