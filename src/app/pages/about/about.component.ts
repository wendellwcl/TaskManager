import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [MatIconModule, FontAwesomeModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
    public githubIcon = faGithub;
}
