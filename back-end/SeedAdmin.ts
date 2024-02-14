import mongoose, { ConnectOptions } from 'mongoose';
import User from './src/models/User'; 
import "dotenv/config"
import db from './src/config';

const adminSeedData = {
    phone: '1234567890',
    email: 'admin1@example.com',
    password: '123456',
};

async function seedAdmin() {
    try {
        const existingAdmin = await User.findOne({ role: 'admin' });

        if (existingAdmin) {
            console.log('Admin user already exists.You can create just one admin user.');
            return;
        }
        await User.create({ ...adminSeedData, role: 'admin' });

        console.log('Admin user seeded successfully');
    } catch (error) {
        console.error('Error seeding admin user:', error);
    } finally {
        await db.disconnect();
    }
}

seedAdmin();
