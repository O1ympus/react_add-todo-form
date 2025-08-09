import React from 'react';
import { Todo } from '../../interfaces/Todo';
import { findUserById } from '../../utils/findUserById';
import { UserInfo } from '../UserInfo';
import cn from 'classnames';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const user = findUserById(todo.userId);

  return (
    <article
      data-id={todo.id}
      className={cn({ 'TodoInfo--completed': todo.completed }, 'TodoInfo')}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {user && (
        <>
          <UserInfo user={user} />
        </>
      )}
    </article>
  );
};
