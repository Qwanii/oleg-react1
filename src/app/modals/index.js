import { memo, useCallback, useMemo, useState } from 'react';
import Basket from '../../app/basket';
import Count from '../../components/count';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import Modal from '../../containers/modal';
import useTranslate from '../../hooks/use-translate';
import FromBasket from '../../containers/from-basket';
import ModalLayout from '../../components/modal-layout';



function Modals() {
  const store = useStore()
  const select = useSelector(state => ({
    modalName: state.modals.modal.name,
    callback: state.modals.modal.callback,
    modal: state.modals.modal
  }))

  const { t } = useTranslate();


  // const onClose =() => store.actions.modals.close()

  const renders = {
    'basket': 
        <Basket />
      ,
    'push-count': 
        <Count 
            onSubmit={select.callback} 
            onClose={select.callback}
            button={{add: "ОК", cancel: "Отмена"}}
        />
      ,
    'another-item': 
        <FromBasket />
  };

  const params = {
    'basket': 
        {
          title: t('basket.title'),
          labelClose: t('basket.close')
        }

      ,
    'push-count': 
          {
            title: "",
            labelClose: "X"
          }
      ,
    'another-item': 
          {
            title: "Добавить товар",
            labelClose: t('basket.close')
          }
  }


  return (
    <>
        {select.modal.map(modal => (
              <ModalLayout
                      title={params[modal.name].title}
                      labelClose={params[modal.name].labelClose}
                      onClose={modal.callback}
                      push={modal.name.includes("push") ? true : false}
              >
                <Modal key={modal} renderModal={renders[modal.name]}/>
              </ModalLayout>
        ))}
    </>
  )
  

}

export default memo(Modals);