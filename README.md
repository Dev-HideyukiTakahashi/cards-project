# 📌 Componentes no Angular

## 📌 O que é um Componente?

- Um **componente** é a unidade básica de construção de uma aplicação Angular.
- Ele é composto por três partes principais:
  - **Template (HTML):** Define a interface do usuário.
  - **Style (CSS/SCSS):** Define os estilos do componente.
  - **Classe (TypeScript):** Contém a lógica do componente.

## 📌 Criando um Componente

Para criar um componente no Angular, use o **Angular CLI**:

```sh
ng generate component nome-do-componente
# ou
ng g c nome-do-componente
```

Isso criará uma pasta com os seguintes arquivos:

- `nome-do-componente.component.ts` → Lógica do componente
- `nome-do-componente.component.html` → Template
- `nome-do-componente.component.css/scss` → Estilos
- `nome-do-componente.component.spec.ts` → Testes

## 📌 Estrutura de um Componente

Exemplo de um componente básico:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-exemplo",
  templateUrl: "./exemplo.component.html",
  styleUrls: ["./exemplo.component.css"],
})
export class ExemploComponent {
  titulo: string = "Olá, Angular!";

  exibirMensagem() {
    alert("Mensagem do componente!");
  }
}
```

## 📌 Adicionando um Componente no Template

Para usar um componente em outro template, utilize o **seletor** definido no `@Component`:

```html
<app-exemplo></app-exemplo>
```

## 📌 Interpolação e Property Binding

- **Interpolação (`{{ }}`)** → Exibe valores no template.
- **Property Binding (`[propriedade]`)** → Passa valores para atributos do HTML.

```html
<h1>{{ titulo }}</h1>
<button [disabled]="false">Clique aqui</button>
```

## 📌 Event Binding

Captura eventos no template e chama métodos no componente:

```html
<button (click)="exibirMensagem()">Clique Aqui</button>
```

## 📌 Two-way Data Binding

Permite que o modelo e a interface do usuário fiquem sincronizados:

```html
<input [(ngModel)]="titulo" />
<p>O título é: {{ titulo }}</p>
```

> **Obs:** Para usar `ngModel`, importe o `FormsModule` no módulo (`app.module.ts`).

## 📌 Input e Output

- **@Input()** → Recebe dados de um componente pai.
- **@Output()** → Envia eventos para o componente pai.

### Exemplo de **@Input()**

```ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-filho",
  template: `<p>Mensagem do Pai: {{ mensagem }}</p>`,
})
export class FilhoComponent {
  @Input() mensagem: string = "";
}
```

```html
<app-filho [mensagem]="'Olá, filho!'"></app-filho>
```

### Exemplo de **@Output()**

```ts
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filho",
  template: `<button (click)="enviarEvento()">Enviar</button>`,
})
export class FilhoComponent {
  @Output() eventoPai = new EventEmitter<string>();

  enviarEvento() {
    this.eventoPai.emit("Mensagem do Filho!");
  }
}
```

```html
<app-filho (eventoPai)="receberMensagem($event)"></app-filho>
```

```ts
receberMensagem(mensagem: string) {
  console.log(mensagem);
}
```

## 📌 Ciclo de Vida do Componente

Os métodos mais utilizados são:

- `ngOnInit()` → Executado após a criação do componente.
- `ngOnDestroy()` → Chamado antes do componente ser destruído.

```ts
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-exemplo",
  template: `<p>Exemplo de ciclo de vida</p>`,
})
export class ExemploComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log("Componente iniciado!");
  }

  ngOnDestroy() {
    console.log("Componente destruído!");
  }
}
```

## 📌 Diretivas Úteis

- `*ngIf` → Renderiza um elemento com base em uma condição.
- `*ngFor` → Itera sobre uma lista.

```html
<p *ngIf="mostrar">Este texto é condicional.</p>

<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

---
