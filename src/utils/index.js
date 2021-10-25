function convertTo(type, event) {
  if (type === 'innerText' || type === 'value') {
    const childrenProperties = Array.from(event.target.children)
      .reduce((acc, cur, index) => (
        [...acc, { value: cur.value, innerText: cur.innerText, index }]
      ), []);
    const [filtered] = childrenProperties
      .filter((element) => element.value === event.target.value);

    return filtered[type];
  }

  throw new Error('convertTo only accepts "value or "innerText" as output format.');
}

export default { convertTo };
