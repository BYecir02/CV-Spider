import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  House,
  User,
  Network,
  ScanSearch,
  Files,
  Settings
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly House = House;
  readonly User = User;
  readonly Network = Network;
  readonly ScanSearch = ScanSearch;
  readonly Files = Files;
  readonly Settings = Settings;

  navItems = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: House
    },
    {
      label: 'Mon profil',
      route: '/profile',
      icon: User
    },
    {
      label: 'Référentiel',
      route: '/knowledge-base',
      icon: Network
    },
    {
      label: 'Adapter un CV',
      route: '/cv-adapter',
      icon: ScanSearch
    },
    {
      label: 'Mes CV',
      route: '/resumes',
      icon: Files
    }
  ];
}
