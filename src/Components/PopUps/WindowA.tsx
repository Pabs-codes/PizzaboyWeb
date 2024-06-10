import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, Typography, Box, Grid, Chip, Button, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../CartContext"; 

const ingredients1 = ["pineapple", "Leaf spinach", "fresh tomatoes", "fresh basil", "Jalapenos", "Capers", "Corn", "mild peppers", "Olives", "Red onions", "Anchovies"];
const ingredients2 = ["Broccoli", "Crème fraîche", "fresh mushrooms", "fresh peppers", "Gorgonzola", "Gouda cheese", "Pepperoni salami", "Turkey ham", "smoky BBQ sauce", "Beef salami", "hollandaise sauce", "tuna", "Turkish Garlic Sausage"];
const deluxeIngredients = ["shrimp", "Chicken kebab", "Chicken breast fillet", "Shepherd's cheese", "Salmon fillet", "Mozzarella"];

const PizzaPopup = ({ open, handleClose, pizza }) => {
  const { addToCart } = useCart();  // Use the addToCart function from the context
  const [quantity, setQuantity] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleAddToCart = () => {
    const item = {
      name: pizza.name,
      description: pizza.description,
      price: pizza.price,
      quantity,
      ingredients: selectedIngredients,
    };
    addToCart(item);
    handleClose();
  };

  if (!pizza) return null;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h6">{pizza.name}</Typography>
        <Typography variant="subtitle2">{pizza.description}</Typography>
        <IconButton onClick={handleClose} style={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box mb={2} p={2} border={1} borderRadius={4} borderColor="grey.300" bgcolor="white">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight="bold">Basic Ingredients 1</Typography>
            <Typography variant="body2">1,10 €</Typography>
          </Box>
          <Grid container spacing={1}>
            {ingredients1.map((item) => (
              <Grid item key={item}>
                <Chip
                  label={item}
                  clickable
                  onClick={() => toggleIngredient(item)}
                  style={{
                    backgroundColor: selectedIngredients.includes(item) ? 'red' : 'default',
                    color: selectedIngredients.includes(item) ? 'white' : 'default',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider style={{ margin: '16px 0' }} />
        <Box mb={2} p={2} border={1} borderRadius={4} borderColor="grey.300" bgcolor="white">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight="bold">Basic Ingredients 2</Typography>
            <Typography variant="body2">1,50 €</Typography>
          </Box>
          <Grid container spacing={1}>
            {ingredients2.map((item) => (
              <Grid item key={item}>
                <Chip
                  label={item}
                  clickable
                  onClick={() => toggleIngredient(item)}
                  style={{
                    backgroundColor: selectedIngredients.includes(item) ? 'red' : 'default',
                    color: selectedIngredients.includes(item) ? 'white' : 'default',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider style={{ margin: '16px 0' }} />
        <Box mb={2} p={2} border={1} borderRadius={4} borderColor="grey.300" bgcolor="white">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight="bold">Deluxe Ingredients</Typography>
            <Typography variant="body2">2,50 €</Typography>
          </Box>
          <Grid container spacing={1}>
            {deluxeIngredients.map((item) => (
              <Grid item key={item}>
                <Chip
                  label={item}
                  clickable
                  onClick={() => toggleIngredient(item)}
                  style={{
                    backgroundColor: selectedIngredients.includes(item) ? 'red' : 'default',
                    color: selectedIngredients.includes(item) ? 'white' : 'default',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider style={{ margin: '16px 0' }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Number</Typography>
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleDecrease}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{quantity}</Typography>
            <IconButton onClick={handleIncrease}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        <Button onClick={handleAddToCart} variant="contained" color="primary" fullWidth style={{ marginTop: 16, backgroundColor: '#e40000' }}>
          Add to Cart {pizza.price}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PizzaPopup;
