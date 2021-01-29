import React from 'react';

export default function QuizDaGaleraPage() {
  return (
    <div>Quiz da Galera</div>
  );
}

export async function getStaticProps(context) {
  console.log('o pai ta on', context.query.id);
  return {
    props: {

    },
  };
}
