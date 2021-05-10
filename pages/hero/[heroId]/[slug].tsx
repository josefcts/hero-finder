import React from 'react'
import { NextPageContext } from 'next'
import { WithTranslation } from 'next-i18next'
import Link from 'next/link'
import { Button, Card, Grid, Image } from 'semantic-ui-react'
import { withTranslation } from '../../../i18n'

import { ISearch } from '../../../store/search/types'
import Layout from '../../../components/Layout'
import { fetchGetHero } from '../../../store/search/actions'

type Props = ISearch & WithTranslation

const HeroPage = ({ hero, t }: Props) => {
  if (!hero) return <div></div>

  return (
    <Layout title={`Hero Finder - ${hero.name}`}>
      <div className="lg:mt-8 p-4">
        <Grid centered columns="equal">
          <Grid.Column centered computer={4} mobile={16} tablet={12}>
            <Card fluid className="text-center">
              <Image
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{hero.name}</Card.Header>
                <Card.Description>{hero.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                {hero.urls &&
                  hero.urls.map((url: any) => {
                    if (url.type === 'detail')
                      return (
                        <a target="_blank" href={url.url} className="font-bold text-3xl">
                          <Button primary>{t('details')}</Button>
                        </a>
                      )
                    else if (url.type === 'wiki')
                      return (
                        <a target="_blank" href={url.url} className="font-bold text-3xl">
                          <Button color="purple">{t('wiki')}</Button>
                        </a>
                      )
                    else if (url.type === 'comiclink')
                      return (
                        <a target="_blank" href={url.url} className="font-bold text-3xl">
                          <Button positive>{t('comics')}</Button>
                        </a>
                      )
                  })}
              </Card.Content>
            </Card>

            <Link href="/">
              <a className="font-bold text-3xl">
                <Button positive fluid>
                  {t('back')}
                </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    </Layout>
  )
}

HeroPage.getInitialProps = async (ctx: NextPageContext) => {
  const { heroId } = ctx.query
  const { res } = ctx

  if (heroId) {
    await ctx.store.dispatch(fetchGetHero(heroId.toString()))
  }

  const { search } = ctx.store.getState()

  if (!search.hero && res) res.statusCode = 404

  return {
    hero: search.hero,
  }
}

export default withTranslation('hero')(HeroPage)
