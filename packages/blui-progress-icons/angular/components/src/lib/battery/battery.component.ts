import { Component, OnChanges, Input } from '@angular/core';
import { BluiProgressIconComponent } from '../blui-progress-icon.component';
import { rangeValue } from '../utilities';

@Component({
    selector: 'battery-progress',
    template: `
        <blui-progress-icon
            [size]="size"
            [labelPosition]="labelPosition"
            [percent]="percent"
            [showPercentLabel]="showPercentLabel"
            [labelColor]="labelColor"
            [labelSize]="labelSize"
            [color]="color"
        >
            <svg
                [attr.height]="size + 'px'"
                [attr.width]="size + 'px'"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                style="enable-background:new 0 0 24 24;"
                xml:space="preserve"
            >
                <defs>
                    <mask *ngIf="outlined" [attr.id]="maskIDleft">
                        <rect width="100%" height="100%" fill="white" />
                        <polygon fill="black" points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 " />
                    </mask>
                    <mask *ngIf="outlined" [attr.id]="maskIDright">
                        <rect width="100%" height="100%" fill="white" />
                        <rect
                            [attr.x]="startX"
                            y="7"
                            fill="black"
                            [attr.width]="(rv(percent, 0, 100) / 100) * fillWidth"
                            height="10"
                        />
                    </mask>
                    <clipPath [id]="getID()">
                        <path overflow="visible" [attr.d]="getClipPath()" />
                    </clipPath>
                </defs>
                <path
                    *ngIf="backgroundColor"
                    [attr.d]="basePath"
                    [attr.fill]="backgroundColor"
                    [attr.clip-path]="outlined ? undefined : 'url(#' + getID() + ')'"
                />
                <path
                    [attr.fill]="(!outlined && backgroundColor) || color || 'currentColor'"
                    [attr.fill-opacity]="outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3'"
                    [attr.clip-path]="'url(#' + getID() + ')'"
                    [attr.d]="getBasePath()"
                />

                <g [attr.fill]="color || 'currentColor'">
                    <rect
                        [attr.fill]="color || 'currentColor'"
                        [attr.x]="startX"
                        y="7"
                        [attr.clip-path]="'url(#' + getID() + ')'"
                        [attr.width]="(rv(percent, 0, 100) / 100) * fillWidth"
                        height="10"
                        [attr.mask]="outlined && charging ? 'url(#' + maskIDleft + ')' : null"
                    />
                    <polygon
                        *ngIf="outlined && charging"
                        points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13"
                        [attr.mask]="'url(#' + maskIDright + ')'"
                    />
                </g>
            </svg>
        </blui-progress-icon>
    `,
    styleUrls: ['../blui-progress-icon.scss'],
})
export class BatteryComponent extends BluiProgressIconComponent implements OnChanges {
    @Input() charging = false;
    @Input() outlined = false;

    maskIDleft: string;
    maskIDright: string;
    startX: number;
    fillWidth: number;

    rv = rangeValue;

    basePath =
        'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
    chargePath =
        'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
    outlinedPath =
        'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
    baseID = 'blui-battery-clip';
    chargeID = 'blui-battery-clip-charge';

    ngOnChanges(): void {
        this.maskIDleft = `maskLeft-${this.percent}`;
        this.maskIDright = `maskRight-${this.percent}`;

        this.startX = this.outlined ? 3.9 : 2;
        this.fillWidth = this.outlined ? 14.2 : 18;
    }

    getBasePath(): string {
        return this.outlined ? this.outlinedPath : this.basePath;
    }

    getClipPath(): string {
        return this.charging ? this.chargePath : this.basePath;
    }

    getID(): string {
        return this.charging ? this.chargeID : this.baseID;
    }
}
