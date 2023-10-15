import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IApplicationConfig } from 'src/app/shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    @Input() applicationConfig: IApplicationConfig | undefined;

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
