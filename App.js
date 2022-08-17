/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback} from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HtmlView from 'react-native-htmlview';

const response = {
  msg: 'success',
  code: 0,
  data: {
    invitation: {
      invitation_id: 410,
      title:
        '[TEST FOOD] THAM GIA BST “SIÊU SALE ĐỒNG GIÁ 9K”, THẢ GA LÊN ĐƠN CÙNG SHOPEEFOOD',
      create_time: 1660725927,
      // 加载线上数据
      message:
        '<p></p>\n<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>\n<p></p>\n<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-2-6-ab62f53d-220816154758.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>\n<p></p>\n<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-3-6-ddaac98c-220816154832.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>\n<p></p>\n<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-4-6-c896d675-220816154811.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>\n<p style="text-align:center;"><a href="https://merchant.shopeefood.vn/edu/article/bo-suu-tap-chi-8k-dat-lien-nha" target="_self"><span style="color: rgb(0,0,255);background-color: transparent;font-size: 16px;font-family: Arial;"><strong><ins>THAM KHẢO THÔNG TIN CHƯƠNG TRÌNH TẠI </ins></strong></span></a></p>\n<p style="text-align:center;"><a href="https://merchant.shopeefood.vn/edu/article/bo-suu-tap-chi-8k-dat-lien-nha" target="_self"><span style="color: rgb(0,0,255);background-color: transparent;font-size: 16px;font-family: Arial;"><strong><ins>HỌC VIỆN SHOPEEFOOD UNI</ins></strong></span></a><span style="font-size: 16px;font-family: Arial;"><strong> </strong></span></p>\n<p style="text-align:center;"><span style="color: rgb(32,35,37);background-color: transparent;font-size: 16px;font-family: Arial;">Tham gia ngay nhóm </span><a href="https://www.facebook.com/groups/congdongdoitacnowfood" target="_self"><span style="color: rgb(0,0,255);background-color: transparent;font-size: 16px;font-family: Arial;"><strong>CỘNG ĐỒNG ĐỐI TÁC NHÀ HÀNG SHOPEEFOOD</strong></span><span style="font-size: 16px;font-family: Arial;"><strong> </strong></span></a></p>\n<p style="text-align:center;"><span style="color: rgb(32,35,37);background-color: transparent;font-size: 16px;font-family: Arial;">để được hỗ trợ thông tin nhanh chóng</span><span style="color: rgb(255,0,0);background-color: transparent;font-size: 16px;font-family: Arial;">.</span><span style="font-size: 16px;font-family: Arial;"> </span></p>\n<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-art-bedac525-220816154842.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>\n<p></p>\n',
      // 单独加载800k+
      // message:
      //   '<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-01--bf6ff350-220816154735.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>',
      // 单独加载200k+
      // message:
      //   '<img src="https://media.foody.vn/blogscontents/foody-upload-api-foody-admin-3-6-ddaac98c-220816154832.jpg" alt="undefined" style="float:none;height: auto;width: 100%"/>',
      price_slash_invitation: {
        status: 1,
        is_apply_topping: false,
        dates: [1662310800],
        is_all_item: false,
        is_required_popular: false,
        min_merchant_pay: 100,
        cut_off_time: 1661273999,
        discount_type: 2,
        min_selected_item: 1,
        min_item_price: 15000,
        date_ranges: [
          {
            start_time: 1662310800,
            is_required_merchant_join: true,
            start_date: 1662310800,
            end_date: 1662742799,
            end_time: 1662656400,
          },
        ],
        discount_value: 9000,
        name: '[TEST FOOD] THAM GIA BST “SIÊU SALE ĐỒNG GIÁ 9K”, THẢ GA LÊN ĐƠN CÙNG SHOPEEFOOD',
      },
    },
  },
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const htmlContent = response.data.invitation.message;

  const renderNode = useCallback(
    (node, index, siblings, parent, defaultRenderer) => {
      // if (node.name === 'div') {
      //   return (
      //     <View key={index}>{defaultRenderer(node.children, parent)}</View>
      //   );
      // }
      // if (node.name === 'p') {
      //   return (
      //     <Text key={index}>{defaultRenderer(node.children, parent)}</Text>
      //   );
      // }
      if (node.name === 'img') {
        console.log(node);
        console.log(node.attribs.src);
        console.log(defaultRenderer(node.children, parent));
        // return (
        //   <Image
        //     source={{uri: node.attribs.src}}
        //     key={index}
        //     style={{width: 100, height: 100}}
        //   />
        // );
      }
    },
    [],
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <HtmlView
          value={htmlContent.trim().replace(/> </g, '><')}
          renderNode={renderNode}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
