import { Colors } from '../../theme';
import React, { useEffect } from 'react';
import { useColorScheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { normalize } from '../../theme/Metrics';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { AppHeader, Container, Text, Tool } from '../../components';
import { Svgs } from '../../assets/svgs';
import styles from './styles';
import { FlatList, View } from 'react-native';
import { AllTools } from '../../constants';
import { FlatGrid } from 'react-native-super-grid';



const Tools = () => {

  const theme = useColorScheme();
  const { t, i18n } = useTranslation();
  const { Docx } = Svgs;

  useEffect(() => {
    i18n.changeLanguage("fr")
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
      <View style={styles.innerContainer}>
        <FlatGrid
          data={AllTools}
          itemDimension={normalize(75)}
          extraData={AllTools}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => (
            <Tool backgroundColor={item.backgroundColor} SvgIcon={item.SvgIcon} />
          )}
        />
      </View>
    </Container>
  );
};

export default Tools;
