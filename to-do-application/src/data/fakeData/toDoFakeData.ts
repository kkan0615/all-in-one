import { ToDoInterface } from '@/types/todo'

export const ToDoFakeData : Array<ToDoInterface> = [
  {
    id: 0,
    title: 'default #0',
    color: '#FFFFFF',
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
    endDate: new Date().toISOString().substr(0, 10),
    status: 'working',
    tags: []
  },
  {
    id: 1,
    title: 'default #1',
    color: '#F57F17FF',
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
    endDate: new Date().toISOString().substr(0, 10),
    status: 'working',
    tags: []
  }
]
