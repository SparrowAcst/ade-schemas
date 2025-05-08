{{#if (or title description deprecated) }}
{{#if title}}<span class="value">{{title}}</span>{{/if}}{{#if deprecated}}(DEPRECATED) {{/if}}<span>{{{description}}}</span><br/>{{/if}}{{> type . ~}}
