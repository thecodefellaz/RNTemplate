import { Colors } from '../../theme';
import React, { useEffect } from 'react';
import { useColorScheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { normalize } from '../../theme/Metrics';
import { AppHeader, Container } from '../../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Home = () => {

  const theme = useColorScheme();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en")
  }, [i18n])

  const HeaderRight = () => {
    return (
      <FontAwesome5 name='crown' size={28} color={Colors[theme].gold} />
    )
  }

  return (
    <Container safeArea>
      <AppHeader
        hideBackIcon={true}
        title={t("PDF CONVERTER")}
        customStyle={{ paddingHorizontal: normalize(12) }}
        titleStyle={{ color: Colors[theme].white }}
        rightView={<HeaderRight />}
      />
    </Container>
  );
};

export default Home;
