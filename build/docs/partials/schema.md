# {{~#if title~}} <a name="{{anchor subschema}}"></a>{{title}} {{~/if}}


**Schema: [{{subschema}}]({{subschema}})**


## Description
{{#if (or description deprecated)}}
{{#if deprecated}}(DEPRECATED) {{/if}}{{{description}}}
{{/if}}

{{> type . ~}}
