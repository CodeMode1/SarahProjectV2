import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from './client';
import { ClientService } from './client.service';
import { ErreurService } from '../erreurs/erreur.service';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { NoClientPipe } from '../pipes/noClient.pipe';

@Component({
    moduleId: module.id,
    selector: 'my-client-list',
    templateUrl: 'client-list.component.html',
    styles: [`
        section{
            padding: 2% 0 0 0;
        }

        td, th{
            text-align: center;
            font-size: 1vw;
        }

        thead > tr{
            background-color: #fafafa;
            border-bottom: 0.25em solid #1565c0;
        }

        tbody > tr:hover{
            background-color: #a9d4f9;
        }

        tbody > tr{
            border-bottom: 0.2em solid #ddd;
        }

        .estSelectRange{
             background-color: #519BDB;
         }

        h3{
            padding: 0.5% 0 0.5% 0;
            margin:0;
            font-size: 1.5vw;
        }

        .panel-heading{
            text-align:center;
        }

        .bg-danger{
            text-align: center;
            color: #CC0000;
            font-weight: bolder;
            font-size: 1vw;
        }

        #searchLabel{
            margin-bottom:0;
            text-align:left;
        }

        .size{
            font-size:1vw;
            text-align:center;
        }

        .disableA{
            pointer-events: none;
            cursor: default;
            color: #ddd;
        }

        .erreurSearchClient{
            background: #ff8080;
        }

        #boutonSearchNoClient{
            background: #519BDB;
        }

        a{
            color: #000;
            display: block;
            clear: both;
            position: relative;
        }

        a span{
            position: absolute;
            display:none;
            background: rgba(20, 20, 31, 0.84);
            text-align: center;
            border-left: 1px solid #111;
            border-top: 1px solid #111;
            border-right: 1px solid #333;
            border-bottom: 1px solid #333;
            border-radius: 3px;
            color: #fff;
            font-size: 0.7em;
            text-indent: 0;
            width: auto;
            height:auto;
        }

        a span:after{
            content: ' ';
	        height: 0;
	        position: absolute;
	        width: 0;
            border: 10px solid transparent;
	        border-top-color: #333;
            top: 100%;
	        left: 10px;
        }

        a:hover span{
            display: block;
            bottom: 1vw;
            left:75%;
            z-index: 9999;
            -moz-animation: moveTooltip .25s linear;
            -webkit-animation: moveTooltip .25s linear;
        }

        a:hover{
            color: #337ab7;
        }

        .widgets{
            display: inline-block;
            padding-right: 5%;
        }

        #specialSearch{
            padding: 0;
        }

        .divFooter{
            text-align:center;
        }

        .col-md-12 {
            padding: 2%;
        }

        @-moz-keyframes moveTooltip {
    0% {
        -moz-transform: scale(0,0);
        opacity: 0;
    }

    45% {
        -moz-transform: scale(0.4,0.4);
        opacity: 0.7;
    }

    75% {
        -moz-transform: scale(1.3,1.3);
        opacity: 0.4;
    }

    100% {
        -moz-transform: scale(1,1);
        opacity: 1;
    };
}

@-webkit-keyframes moveTooltip {
    0% {
        -webkit-transform: scale(0,0);
        opacity: 0;
    }

    45% {
        -webkit-transform: scale(0.4,0.4);
        opacity: 0.7;
    }

    75% {
        -webkit-transform: scale(1.3,1.3);
        opacity: 0.4;
    }

    100% {
        -webkit-transform: scale(1,1);
        opacity: 1;
    };
}

    `]
})
export class ClientListComponent implements OnInit {
    titre: string;
    clients: Client[];
    clientSelected: Client;
    noClient: number;
    titreModal: string;
    confirmImp: boolean;
    noClientTextSearch: string;
    noClientFiltreList: string;
    erreurSearchClient: boolean;
    
    constructor(private _clientService: ClientService, private _erreurService: ErreurService) { 
        this.titre = "Liste des Clients";
        this.noClientTextSearch = "";
        this.noClientFiltreList = "";
        this.erreurSearchClient = false;
    }

    ngOnInit() {
        console.log('dans on init');
        this.getClients();   
    }

    getClients(){
        this._clientService.getClients().subscribe(
            data => {
                this.clients = data;
                //print data
                for(let i=0; i < this.clients.length; i++){
                    console.log(this.clients[i]);
                }
            },
            error => this._erreurService.handleErreur(error)
        );
    }

    eventModal(){
        this.titreModal= "Suppression"; 
    }

    clientSelect(client: Client){
        this.confirmImp = false;
        this.clientSelected = client;
        console.log(this.clientSelected);
        console.log(this.clientSelected.noClient);
        this.noClient = this.clientSelected.noClient;
        //console.log("id mongo : " + this.clientSelected.clientId);
    }

    onDelete(){
        if(this.clientSelected !== null){
            this._clientService.deleteClient(this.clientSelected)
                .subscribe(
                    data => console.log(data),
                    error => this._erreurService.handleErreur(error)
                );
        }
        this.confirmImp = true;
    }

    onSearchNoClient(){
        this.erreurSearchClient = false;
        console.log("contenu input: ");
        console.log(this.noClientTextSearch);
        if(this.noClientTextSearch === null || (this.noClientTextSearch).toString() === ""){
            this.noClientFiltreList = "";
            return;
        }
        else if(isNaN(Number(this.noClientTextSearch))){
            alert('pas un nombre');
            this.erreurSearchClient = true;
            return;
        }
        else if(this.noClientTextSearch.toString().length > 10){
            alert('nombre trop gros');
            this.erreurSearchClient = true;
            return;
        }
        this._clientService.getClient(Number(this.noClientTextSearch))
            .subscribe(
                data => {
                    this.noClientFiltreList = (data.noClient).toString();
                    console.log(this.noClientFiltreList);
                },
                error => {
                    alert('code invalide');
                    this.erreurSearchClient = true;
                    this._erreurService.handleErreur(error)
                }
            );
    }

    actualiser(){
        if(this.noClientTextSearch !== null && (this.noClientTextSearch).toString() !== ""){
            this._clientService.getClient(Number(this.noClientTextSearch))
            .subscribe(
                data => {
                    this.noClientFiltreList = (data.noClient).toString();
                    console.log(this.noClientFiltreList);
                },
                error => {
                    alert('code invalide');
                    this.erreurSearchClient = true;
                    this._erreurService.handleErreur(error)
                }
            );
            return;
        }else{
            this.noClientFiltreList = "";
            this.getClients();
        }
        
    }

    logInput(value){
        console.log(value);
    }
}