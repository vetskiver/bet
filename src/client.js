import { createClient } from '@supabase/supabase-js'

const URL = 'https://beacrmartqeffpllxyle.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlYWNybWFydHFlZmZwbGx4eWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3OTgxMjgsImV4cCI6MjAzODM3NDEyOH0.DUIEljoHLjHpPioCJZE-mQGUC02Tp1H1fxWm60K6ZQ8';

export const supabase = createClient(URL, API_KEY);
