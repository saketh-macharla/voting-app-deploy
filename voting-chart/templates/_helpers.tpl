{{- define "db-labels"}}
    type: db
    tier: database
{{- end }}

{{- define "api-labels"}}
    name: go-api-pod
    app: demo-react-mongo-app
{{- end }}

{{- define "fe-labels"}}
    name: fe-react-app-pod
    app: demo-react-mongo-app
{{- end }}

{{- define "common-label"}}
    app: demo-react-mongo-app
{{- end }}