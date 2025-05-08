|
	{{~#if true}}**{{escape name}}**{{/if~}}
|
	{{~code display_type ~}}
|
	{{~#if subschema ~}}
    Reference: [{{title}}]({{anchorref subschema}})
    {{~else~}}
    {{~#if deprecated}}(DEPRECATED)<br/>{{/if}}
    {{~#if description ~}}
    {{firstline description .}}<br/>{{/if ~}}
    {{/if ~}}
|
	{{~#if (isdefined required)}}{{#if required}}yes{{else}}no{{/if}}{{/if~}}
|
