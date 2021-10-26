export default async function fetchCurrencies(
  parsers = [],
  endpoint = 'https://economia.awesomeapi.com.br/json/all',
) {
  const response = await fetch(endpoint);
  const data = await response.json();
  const finalParsedData = parsers.reduce(
    (parsedData, parser) => parser(parsedData),
    data,
  );

  return finalParsedData;
}
