import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { colorInput } from '@sanity/color-input';
import { muxInput } from 'sanity-plugin-mux-input';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { EarthGlobeIcon, DocumentIcon, CaseIcon } from '@sanity/icons';

export default defineConfig({
  name: 'default',
  title: 'Aka',

  projectId: 'srqhq3ai',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
        .title('Content')
        .items([
          S.divider(),
          S.listItem()
            .title('Site Settings')
            .icon(EarthGlobeIcon)
            .child(
              S.editor()
                .schemaType('siteSettings')
                .documentId('siteSettings')
            ),
          S.divider(),
          S.listItem()
            .title('Home Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('homePage')
                .documentId('homePage')
            ),
          S.listItem()
            .title('Info Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('infoPage')
                .documentId('infoPage')
            ),
          S.listItem()
            .title('Work Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('workPage')
                .documentId('workPage')
            ),
          S.divider(),
          S.listItem()
            .title('Projects')
            .icon(CaseIcon)
            .child(
              S.documentList()
                .title('Projects')
                .schemaType('project')
                .filter('_type == "project"')
            ),
          S.divider(),
          orderableDocumentListDeskItem({type: 'project', S, context}),
          S.divider(),
        ])
      },
    }),
    visionTool(),
    colorInput(),
    muxInput({mp4_support: 'standard'}),
    vercelDeployTool()
  ],

  schema: {
    types: schemaTypes,
  },

  parts: [
    {
      name: 'part:@sanity/base/theme/variables-style',
      path: './customEditorStyles.css',
    },
  ],
})
