import express from 'express';
import customerRoutes from '../routes/client.route';
import productRoutes from '../routes/product.route';
import saleRoutes from '../routes/sell.route'; 
import authRoutes from '../routes/auth.route';

const app = express();
app.use(express.json());

app.use('/client', customerRoutes);
app.use('/product', productRoutes);
app.use('/sale', saleRoutes);
app.use('/auth', authRoutes); 

export default app;
