<script lang="ts">
  import {
    getContext,
    onMount,
  } from 'svelte'

  import {
    NumberDisplay
  } from '@sveadmin/element'

  import {
    SETTING_DECIMALS,
    SETTING_DIGITS,
    SETTING_GET_VALUE,
    SETTING_THOUSAND_SEPARATOR,
    TableContext,
    TableContextKey,
  } from '../../types.js'

  export let column: string,
    contextKey: TableContextKey,
    value: string

  const {
    settings,
  } = getContext(contextKey) as TableContext

  const {
    [SETTING_DECIMALS]: decimals = 2,
    [SETTING_DIGITS]: digits = 7,
    [SETTING_GET_VALUE]: getValue,
    [SETTING_THOUSAND_SEPARATOR]: thousandSeparator = 3,
  } = settings.getColumn(column)

  onMount(() => {
    if (!value
      && getValue) {
      value = getValue()
    }
  })

</script>
{#if value}
  <sveadatacellcontent>
    <NumberDisplay
      {decimals}
      {digits}
      {thousandSeparator}
      {value} />
  </sveadatacellcontent>
{/if}