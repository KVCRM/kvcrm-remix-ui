import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'KVCRM' },
    {
      content: 'Remix version of the KVCRM sample application',
      name: 'description',
    },
  ]
}

export default function Index() {
  return (
    <div>
      <h1>KVCRM</h1>
      <p>Remix version of the KVCRM sample application.</p>
    </div>
  )
}
