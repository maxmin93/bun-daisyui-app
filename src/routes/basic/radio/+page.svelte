<script>
  const values = [
    { label: 'ten', price: 10 },
    { label: 'twenty', price: 20 },
    { label: 'thirty', price: 30 },
  ];
  let selected = 30; //values[1];

  const slugify = (str = '') =>
    str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
</script>

{#each values as value}
  <label for={slugify(value.label)}>
    <input
      type="radio"
      bind:group={selected}
      id={slugify(value.label)}
      name="amount"
      value={value.price}
    />
    {value.label}
  </label>
{/each}

<p>selected: {selected}</p>
