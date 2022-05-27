import './ProductCard.css';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';
import ConfirmedDeleting from '../../ConfirmedDeleting/ConfirmedDeleting';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({
  isSeller,
  isCart,
  product,
  handleEditProductPop,
  handelDeleteFromCart,
  checkState,
  handleChangeId,
  handleOnClick,
  deletedProductId,
  deletedProductValue,
  updateState,
}) => {
  const { name, price, image, id,quantity } = product;
  const navigate = useNavigate();

  const deleteFromDataBase = (e) => {
    axios
      .delete(`/api/v1/product/${deletedProductValue}`, {
        data: {
          id: deletedProductValue,
        },
      })
      .then(() => {
        toast.success('Your Product has been deleted Successfully!');
        updateState();
      });
  };
  return (
    <li className='card' id={id}>
      <div className='card-main'>
        {!isSeller && !isCart && (
          <i
            className='fa-solid fa-cart-shopping'
            onClick={(e) => handleChangeId(e.target.parentNode.parentNode.id)}
          />
        )}

        <img src={image} alt='product' />
      </div>

      {!isSeller && !isCart ? (
        <div className='info'>
          <div className='details'>
            <span className='price'>${price}</span>
            <span className='name'>{name}</span>
          </div>

          <Button text='More' handleOnClick={() => navigate(`/product/${id}`)} />
        </div>
      ) : (
        <div className='info'>
          <span className='name'>{name}</span>
          <div className='actions'>
            {!isCart ? (
              <>
                <i
                  id={id}
                  onClick={handleEditProductPop}
                  className='fa-solid fa-pen-to-square'></i>
                <i
                  className='fa-solid fa-trash-can'
                  onClick={() => {
                    handleOnClick();
                    deletedProductId(id);
                  }}></i>
                {checkState ? (
                  <ConfirmedDeleting
                    handleOnClick={handleOnClick}
                    handelDelete={() => {
                      deleteFromDataBase();
                      handleOnClick();
                    }}
                  />
                ) : null}
              </>
            ) : (
              <>
                <p>
                  <span className='price'>${price}</span> X{quantity}
                </p>
                <i
                  className='fa-solid fa-trash-can'
                  onClick={() => {
                    handelDeleteFromCart(id);
                    toast.success('Your Product has been deleted Successfully!');
                  }}></i>
              </>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default ProductCard;
