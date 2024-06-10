import React from 'react';
import styles from ".dashboard.module.css";
import ActivitiesCard from './ActivitiesCard';
import ProgressCard from './ProgressCard';
import Chart from './chart/chart';
import Card from './card/card';

interface DashboardCardProps {
  title: string;
  content: string;
}



const DashboardCard: React.FC<DashboardCardProps> = ({ title, content }) => {
  return (
    <Card title={title} content={content} />
  );
};

interface Projects {
  id: String,
  created_at: String,
  no_of_Waterpans_Developed: number,
  number_of_Earth_Dams_Developed: number,
  county_id: String,
  number_of_Boreholes_Developed: number,
  number_of_shallow_wells_Developed: number,
  number_of_subsurface_Dams_Developed: number,
  irrigated_Land_Developed: number,
  rangeland_Pastureland_Rehabilitated: number,
  number_of_Health_and_eloped_Rehabilitated: number,
  number_of_Hay_stores_sheds_Constructed: number,
  number_of_Veterinary_aboratories_Equipped: number,
  access_Roads_Rehabilitated: number
}


const Dashboard: React.FC<any> = async ({proj}) => {
  return (
  
    <div>
      
    </div>
  );
};

export default Dashboard;
