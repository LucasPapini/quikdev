import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';

import { Container, Row, BoxPost } from './styles';

import { Modal, ModalContent, ModalTrigger } from '../../components/Modal';


interface Posts {
  comments: {
    content: string;
    id: number;
    user_id: number;
  }[];
  content: string;
  id: number;
  title: string;
  user_id: number;
}

export const Dashboard: React.FC = () => {
  //Logout
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  }

  //Criando o Estado para o post
  const [posts, setPosts] = useState<Posts[]>([]);

  //Pegando os post
  useEffect(() => {
    api.get('/fakeApi')
      .then(response => setPosts(response.data.posts))
  }, []);

  return (
    <Container>
      <Row>
        <div className="menu col-12">
          <button onClick={handleLogout}>Sair</button>
        </div>
      </Row>
      <Row>
        {posts.map((post, idx) => (
          <BoxPost key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div>
              <Modal key={idx}>
                <ModalTrigger asChild>
                  <button>Editar Post</button>
                </ModalTrigger>
                <ModalContent post={post} />
              </Modal>

              <Modal key={idx}>
                <ModalTrigger asChild>
                  <button>Excluir Post</button>
                </ModalTrigger>
                <ModalContent post={post} />
              </Modal>
            </div>
          </BoxPost>
        ))}
      </Row>
    </Container>
  );
};
