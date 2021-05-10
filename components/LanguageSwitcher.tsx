import { WithTranslation } from 'next-i18next'
import React from 'react'
import { FlagNameValues } from 'semantic-ui-react'

import { withTranslation } from '../i18n'

const LanguageSwitcher = ({ t, i18n }: WithTranslation) => {
  const getOppositeCountry = (): string => {
    return i18n.language === 'br' ? 'en' : 'br'
  }

  const getCountry = (): FlagNameValues => {
    if (i18n.language === 'en') return 'us'
    return 'br'
  }

  const changeCookie = () => {
    const oppositeCountry = getOppositeCountry()
    i18n.changeLanguage(oppositeCountry)
  }

  return (
    <div className="cursor-pointer flex items-center" onClick={changeCookie}>
      <img alt="Flag" src={`/img/flags/${getCountry()}-flag.svg`} className="mr-2 w-10" />
      <strong>{t(getCountry())}</strong>
    </div>
  )
}

export default withTranslation('language-switcher')(LanguageSwitcher)
