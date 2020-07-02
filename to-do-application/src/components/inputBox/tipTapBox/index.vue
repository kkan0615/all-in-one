<template>
  <div
    style="color: white;"
  >
    <v-card
      color="primary"
    >
      <editor-menu-bar v-slot="{ commands, focused, isActive }" :editor="editor">
        <div class="menubar is-hidden" :class="{'is-focused': focused}">
          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <v-icon>
              format_bold
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <v-icon>
              format_italic
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <v-icon>
              format_strikethrough
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <v-icon>
              format_underlined
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <v-icon>
              code
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <v-icon>
              format_size
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <v-icon>
              format_list_bulleted
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <v-icon>
              format_list_numbered
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <v-icon>
              format_quote
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            @click="commands.horizontal_rule"
          >
            <v-icon>
              border_horizontal
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            @click="commands.undo"
          >
            <v-icon>
              undo
            </v-icon>
          </v-btn>

          <v-btn
            text
            icon
            @click="commands.redo"
          >
            <v-icon>
              redo
            </v-icon>
          </v-btn>

        </div>
      </editor-menu-bar>
    </v-card>

    <v-row>
      <v-col
        :cols="12"
      >
        <v-card
          outlined
        >
          <v-card-text>
            <editor-content
              :editor="editor"
              @blur="changeContent"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import { Component, Vue, Prop } from 'vue-property-decorator'

// import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
// import {
//   Blockquote,
//   CodeBlock,
//   HardBreak,
//   Heading,
//   HorizontalRule,
//   OrderedList,
//   BulletList,
//   ListItem,
//   TodoItem,
//   TodoList,
//   Bold,
//   Code,
//   Italic,
//   Link,
//   Strike,
//   Underline,
//   History
// } from 'tiptap-extensions'

// @Component({
//   name: 'VTipTapBox',
//   components: {
//     EditorContent,
//     EditorMenuBar
//   }
// })
// export default class extends Vue {
//   @Prop({ default: () => [] }) private rules !: Array<any>
//   @Prop({ default: 'Color Picker' }) private label !: string
//   @Prop({ default: false }) private outlined !: boolean
//   @Prop({ default: '290px' }) private minWidth !: string
//   @Prop({ default: true }) private readonly !: boolean
//   @Prop() private value !: string

//   private dateMenu !: boolean

//   private editor = new Editor({
//     extensions: [
//       new Blockquote(),
//       new BulletList(),
//       new CodeBlock(),
//       new HardBreak(),
//       new Heading({ levels: [1, 2, 3] }),
//       new HorizontalRule(),
//       new ListItem(),
//       new OrderedList(),
//       new TodoItem(),
//       new TodoList(),
//       new Link(),
//       new Bold(),
//       new Code(),
//       new Italic(),
//       new Strike(),
//       new Underline(),
//       new History()
//     ],
//     content: `
//           <h2>
//             Hi there,
//           </h2>
//           <p>
//             this is a very <em>basic</em> example of tiptap.
//           </p>
//           <pre><code>body { display: none; }</code></pre>
//           <ul>
//             <li>
//               A regular list
//             </li>
//             <li>
//               With regular items
//             </li>
//           </ul>
//           <blockquote>
//             It's amazing 👏
//             <br />
//             – mom
//           </blockquote>
//         `
//   })

//   constructor() {
//     super()
//     this.dateMenu = false
//   }

//   beforeDestroy() {
//     this.editor.destroy()
//   }

//   private changeValue(date: string) {
//     this.dateMenu = false
//     this.$emit('input', date)
//     this.$emit('updated:value', date)
//   }
// }

import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `,
        onUpdate: this.changeContent()
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    changeContent(test) {
      console.log('test')

      console.log(test)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
