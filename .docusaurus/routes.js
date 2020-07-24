
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/2020/06/03/development-roadmap',
  component: ComponentCreator('/blog/2020/06/03/development-roadmap'),
  exact: true,
  
},
{
  path: '/blog/2020/06/10/pr1',
  component: ComponentCreator('/blog/2020/06/10/pr1'),
  exact: true,
  
},
{
  path: '/blog/2020/06/16/pr2',
  component: ComponentCreator('/blog/2020/06/16/pr2'),
  exact: true,
  
},
{
  path: '/blog/2020/07/08/pr3',
  component: ComponentCreator('/blog/2020/07/08/pr3'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/backend',
  component: ComponentCreator('/blog/tags/backend'),
  exact: true,
  
},
{
  path: '/blog/tags/roadmap',
  component: ComponentCreator('/blog/tags/roadmap'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/'),
  exact: true,
  
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/installation',
  component: ComponentCreator('/docs/installation'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
