```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: The user enters something into text field and presses submit
    server-->>browser: Redraws notes on webpage without a URL redirect
    deactivate server

```