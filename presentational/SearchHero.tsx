import React from 'react'
import Link from 'next/link'
import { WithTranslation } from 'next-i18next'
import { Item } from 'semantic-ui-react'
import slugify from 'slugify'

import { withTranslation } from '../i18n'
import { IHero } from '../store/search/types'

interface SearchJobProps {
  index: number
}
type Props = IHero & SearchJobProps & WithTranslation

const SearchJob = ({ name, thumbnail, id }: Props) => {
  const slug = slugify(name)

  return (
    <>
      <Item>
        <Item.Image size="tiny" src={`${thumbnail.path}.${thumbnail.extension}`} />
        <Item.Content verticalAlign="middle">
          <Link href="/hero/[heroId]/[slug]" as={`/hero/${id}/${slug}`}>
            <a className="font-bold text-3xl">
              <Item.Header as="a">{name}</Item.Header>
            </a>
          </Link>
        </Item.Content>
      </Item>
    </>
  )
}

export default withTranslation('search')(SearchJob)
