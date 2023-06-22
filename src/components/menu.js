'use client';

import '@gdwc/components'

export default function Home() {
  return (
    <gdwc-menu
      branding="Menu Heading"
      baseUrl="https://dev-decoupled-drupal-contrib.pantheonsite.io"
      menuId="main"
      theme="horizontal">
    </gdwc-menu>
  )
}