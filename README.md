# challenge-oracle-hangman
Challenge Oracle ONE Semana 03 e 04: Crie seu próprio jogo da forca com Javascript

```mermaid
    flowchart TD
    A([Começar a jogar]) --> B(iniciaJogo)
    B --> C(sorteiaPalavra)
    C --> D[/letra clicada/]
    D -->|Certa| E[já foi acertada]
    E -->|não| F[coloca letra na posição]
    F -->G[Checa mais posições]
    G --> D
    E -->|sim| H(erro)
    H --> D
    D -->|Errada| J[já foi errada]
    J -->|sim| K[erro]
    K --> D
    J -->|não| L[coloca letra errada]
    L -->D
```    
```mermaid
    flowchart TD    
    R([Adicionar nova palavra]) -->S[/inputPalavra/]
    S -->T(Checa palavra válida)
    T -->|válida| U(Adiciona a lista de Palavras)
    T -->|inválida| V(mensagem de erro)
```