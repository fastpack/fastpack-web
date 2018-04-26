/**
 * @flow
 */

import type {PageProps} from 'next';
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native-web';

let color = {
  lightShades: '#F2F2F0',
  lightAccent: '#97979C',
  brand: '#DC4D31',
  darkAccent: '#B19279',
  darkShades: '#645F5E',
};

let style = StyleSheet.create({
  title: {
    color: color.brand,
    textTransform: 'uppercase',
    fontSize: '2.5em',
    fontWeight: '900',
  },
  subtitle: {
    color: color.darkShades,
    fontSize: '1.5em',
    fontWeight: '600',
  },
  sectionTitle: {
    color: color.brand,
    textTransform: 'uppercase',
    fontSize: '1.5em',
    fontWeight: '900',
  },
  sectionContent: {
    paddingVertical: 10,
    fontSize: '1.05em',
    color: '#333',
    width: 600,
  },
  tocItem: {
    color: color.brand,
    fontWeight: '900',
  },
});

function Container(props) {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{paddingLeft: 310}}>{props.children}</View>
    </View>
  );
}

function HeaderContainer(props) {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{backgroundColor: color.brand, width: 300, flexShrink: 1}} />
      <View style={{flex: 1, paddingHorizontal: 10}}>{props.children}</View>
    </View>
  );
}

function Header() {
  return (
    <View>
      <HeaderContainer>
        <Text style={style.title}>fastpack</Text>
      </HeaderContainer>
      <Container>
        <Text style={style.subtitle}>pack js fast & easy</Text>
      </Container>
      <View style={{paddingTop: 25}}>
        {sections.map(section => (
          <View key={section.id} style={{paddingBottom: 5}}>
            <HeaderContainer>
              <Text style={style.tocItem}>{section.title}</Text>
            </HeaderContainer>
          </View>
        ))}
      </View>
    </View>
  );
}

function Section(props) {
  return (
    <View>
      <HeaderContainer>
        <Text style={style.sectionTitle}>{props.title}</Text>
      </HeaderContainer>
      <Container>
        <Text style={style.sectionContent}>{props.content}</Text>
      </Container>
    </View>
  );
}

function Wrapper(props) {
  return (
    <View style={{alignItems: 'left', width: '100%', height: '80vh', ...props.style}}>
      {props.children}
    </View>
  );
}

function Par(props) {
  return <Text style={{paddingVertical: 10}}>{props.children}</Text>;
}

let motivationAndVision = {
  id: 'motivationAndVision',
  title: 'Motivation & Vision',
  content: (
    <View>
      <Par>
        We built fastpack for ourselves to solve over 50 seconds long build times. We saw
        a niche for simple to use toolset around javascript which also perform fast.
      </Par>
      <Par>
        While developing fastpack we were driven by the pragmatic vision which we
        summarize in the following points:
      </Par>
      <Text>- Build performance</Text>
      <Text>- Correctness</Text>
      <Text>- Easy to Use</Text>
      <Text>- Plays Well with Existent Ecosystem of Tools</Text>
      <Text>- Approachable and Maintainable Implementation</Text>
    </View>
  ),
};

let installationAndUsage = {
  id: 'installationAndUsage',
  title: 'Installation & Usage',
};

let advancedUsage = {
  id: 'advancedUsage',
  title: 'Advanced Usage',
};

let roadmapAndDevelopment = {
  id: 'roadmapAndDevelopment',
  title: 'Roadmap & Development',
};

let sections = [
  motivationAndVision,
  installationAndUsage,
  advancedUsage,
  roadmapAndDevelopment,
];

function Page(props: PageProps) {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{
        backgroundColor: color.lightShades,
      }}>
      <Wrapper style={{justifyContent: 'center'}}>
        <Header />
      </Wrapper>
      {sections.map(section => (
        <Wrapper key={section.id}>
          <Section title={section.title} content={section.content} />
        </Wrapper>
      ))}
    </ScrollView>
  );
}

export default Page;
