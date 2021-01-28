import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (

    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="Qual o seu Nome?"
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(name);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucaspires-source" />
    </QuizBackground>

  );
}
