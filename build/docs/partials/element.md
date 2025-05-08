{{mdlevel path}} {{escape path}} 


**Description**: {{#if (or description deprecated)}}
{{#if deprecated}}(DEPRECATED) {{/if}}{{{description}}}

{{/if}}
{{> type . ~}}
